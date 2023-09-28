import { WeiToETH } from "@/utils";
import G6 from "@antv/g6";

G6.registerNode(
  "node-address",
  {
    drawShape: (cfg, group) => {
      const rect = group!.addShape("rect", {
        attrs: {
          x: -150 / 2,
          y: -15,
          width: 150,
          height: 30,
          radius: 15,
          stroke: cfg?.style?.stroke,
          lineWidth: 0.6,
          fill: "#fff",
        },
      });
      return rect;
    },
    getAnchorPoints: () => {
      return [
        // [0, 0.5],
        // [1, 0.5],
      ];
    },
    afterUpdate: (cfg, node) => {
    
    },

  },
  "single-shape"
);
