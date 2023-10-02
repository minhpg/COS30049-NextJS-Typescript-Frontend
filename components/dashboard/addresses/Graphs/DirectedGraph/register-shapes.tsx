// @ts-nocheck
// Disable ts-check due to problems with `g6-react-node` typings
import { Address, AddressTypeFull } from "@/types";
import G6, { ModelConfig } from "@antv/g6";
import { Rect, Group, Text, createNodeFromReact } from "@antv/g6-react-node";

interface INodeAddressReactProps {
	cfg: ModelConfig;
}

/** Extending `ModelConfig` interface to append data to node model */
type NodeConfigWithData = ModelConfig & {
	data: Address;
};

/** Define node component using `g6-react-node` components */
const Card = ({ cfg }: INodeAddressReactProps) => {
	const nodeConfig = cfg as NodeConfigWithData;
	return (
		<Group draggable>
			<Rect
				style={{
					width: "auto",
					height: "auto",
					fill: "#fff",
					stroke: "#ddd",
					shadowColor: "#eee",
					shadowBlur: 30,
					radius: [8],
					justifyContent: "center",
					padding: [10, 10, 10, 10],
					opacity: nodeConfig?.style?.opacity,
				}}
				draggable
			>
				<Text
					style={{
						fill: "rgb(55 65 81)",
						fontSize: 9,
						fontWeight: 400,
						opacity: nodeConfig?.style?.opacity,
					}}
				>
					{nodeConfig.label}
				</Text>
				<Text
					style={{
						fill: "rgb(107 114 128)",
						fontSize: 7,
						fontWeight: 300,
						opacity: nodeConfig?.style?.opacity,
						marginTop: 10,
					}}
				>
					{
						AddressTypeFull[
							nodeConfig.data.type as keyof typeof AddressTypeFull
						]
					}
				</Text>
			</Rect>
		</Group>
	);
};

/** Registering node with G6 */
G6.registerNode("node-address-react", createNodeFromReact(Card));
