import { GraphOptions } from "@antv/g6";

export const graphOptions: GraphOptions = {
  container: "g6-graph",
  height: 500,
  renderer: "svg",
  modes: {
    default: ["drag-canvas", "drag-node", "zoom-canvas"],
  },
  defaultNode: {
    shape: "node-address",
    style: {
      stroke: "#ff68f0",
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
        fontWeight: "light",
        fill: "rgb(55 65 81)",
        fontSize: 10,
        opacity: 0.8,
      },
    },
  },
  layout: {
    type: "dagre",
    rankdir: "LR",
    nodesep: 30,
    ranksep: 100,
  },
};
