import PlaceholderInfoMenu from "./GraphInfoMenu";
import EdgeInfoMenu, { IEdgeInfoMenuModel } from "./EdgeInfoMenu";
import NodeInfoMenu, { INodeInfoMenuModel } from "./NodeInfoMenu";
import { useQuery } from "@apollo/client";
import GetFullAddressStat from "@/graphql/dashboard/addresses/stat/GetFullAddressStat.gql";
import { Text } from "@tremor/react";
import { useContext } from "react";
import { GraphContext } from "../GraphContext";

const InfoMenus = () => {
	const context = useContext(GraphContext);
	const { showEdgeMenu, selectedEdge } = context.edgeMenu!;
	const { showNodeMenu, selectedNode } = context.nodeMenu!;

	const nodeModelData = (selectedNode as INodeInfoMenuModel)?.data;
	const address = nodeModelData?.address;
	const { data } = useQuery(GetFullAddressStat, {
		variables: {
			address,
		},
	});

	if (!data) return <Text className="text-sm">Loading...</Text>;
	if (data.addresses.length == 0)
		return <Text className="text-sm">Address not found!</Text>;
	const addressData = data.addresses[0];

	return (
		<>
			{showEdgeMenu || showNodeMenu ? (
				<></>
			) : (
				<PlaceholderInfoMenu graph={context.graph} />
			)}
			{showEdgeMenu && (
				<EdgeInfoMenu model={selectedEdge as IEdgeInfoMenuModel} />
			)}
			{showNodeMenu && <NodeInfoMenu data={addressData} />}
		</>
	);
};

export default InfoMenus;
