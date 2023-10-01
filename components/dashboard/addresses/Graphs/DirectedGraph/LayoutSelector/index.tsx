import { Layout } from "@antv/graphin";
import { Select, SelectItem } from "@tremor/react";
import { layouts } from "../graph-layouts";
import { useContext } from "react";
import { GraphContext } from "../GraphContext";

const LayoutSelector = () => {
	const context = useContext(GraphContext);
	const { layout, setLayout } = context.layout!;
	if (!context.graph) return <></>;

	const handleChange = (value: string): void => {
		setLayout(layouts.find((item) => item.type === value) || layouts[0]);
	};

	return (
		<Select className="w-24" value={layout.type} onChange={handleChange as any}>
			{layouts.map(({ type }) => {
				return (
					<SelectItem key={type} value={type || ""}>
						{type}
					</SelectItem>
				);
			})}
		</Select>
	);
};

export default LayoutSelector;
