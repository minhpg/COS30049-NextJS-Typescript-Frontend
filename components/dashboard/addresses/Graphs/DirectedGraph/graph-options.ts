import { GraphOptions } from "@antv/g6";

export const graphOptions: Partial<GraphOptions> = {
	height: 500,
	renderer: "svg",
	modes: {
		default: ["drag-canvas", "drag-node", "zoom-canvas"],
	},
	defaultNode: {
		shape: "node-address",
		style: {
			stroke: "rgb(229 231 235)",
			shadowColor: "rgb(255, 255, 255)",
		},
		labelCfg: {
			style: {
				fontWeight: "light",
				fill: "rgb(55 65 81)",
				fontSize: 10,
				opacity: 0.8,
			},
		},
	},
	defaultEdge: {
		style: {
			stroke: "#17acff",
			endArrow: true,
		},
		labelCfg: {
			autoRotate: true,
			refY: -8,
			style: {
				fontWeight: 300,
				fill: "rgb(107 114 128)",
				fontSize: 9,
			},
		},
	},
};
