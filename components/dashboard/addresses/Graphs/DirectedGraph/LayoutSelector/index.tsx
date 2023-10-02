import { Select, SelectItem } from "@tremor/react";
import { useContext } from "react";
import { GraphContext } from "../GraphContext";
import { layouts } from "../graph-layouts";

/** Layout selector component to allow selecting between available layouts */
const LayoutSelector = () => {
	/** Get `layout` and `setLayout` from context*/
	const context = useContext(GraphContext);
	const { layout, setLayout } = context.layout!;

	if (!context.graph) return <></>;

	/** Setting layout on selection change */
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
