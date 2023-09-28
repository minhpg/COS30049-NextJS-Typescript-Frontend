import { Graph, IEdge, INode } from "@antv/g6";

export const registerEvents = (graph: Graph) => {
  registerEventShowPathOnHover(graph);
};

export const registerEventShowPathOnHover = (graph: Graph) => {
  const blurItem = (item: IEdge | INode) => {
    graph.updateItem(item, {
      style: {
        opacity: 0.1,
      },
      labelCfg: {
        style: {
            opacity: 0.1
        }
      }
    });
  };

  const unblurItem = (item: IEdge | INode) => {
    graph.updateItem(item, {
      style: {
        opacity: 1.0,
      },
      labelCfg: {
        style: {
            opacity: 1.0
        }
      }
    });
  };
  const blurAllItems = () => {
    graph.getNodes().map((item) => blurItem(item));
    graph.getEdges().map((item) => blurItem(item));
  };

  const unblurAllItems = () => {
    graph.getNodes().map((item) => unblurItem(item));
    graph.getEdges().map((item) => unblurItem(item));
  };

  graph.on("edge:mouseleave", (ev) => {
    unblurAllItems();
    // Attention: the following code must be called to repaint the graph
    graph.paint();
  });

  graph.on("node:mouseleave", (ev) => {
    unblurAllItems();
    // Attention: the following code must be called to repaint the graph
    graph.paint();
  });

  // Mouse enters an edge
  graph.on("edge:mouseenter", (ev) => {
    blurAllItems();
    // Get the target of the entering event
    const edge = ev.item as IEdge;
    // The source node of the edge
    const source = edge.getSource();
    // The target node of the edge
    const target = edge.getTarget();
    // Shift the edge to the front, and then shift the end nodes to the front
    edge.show();
    unblurItem(edge);
    unblurItem(source);
    unblurItem(target);
    // Attention: the following code must be called to repaint the graph
    graph.paint();
  });

  graph.on("node:mouseenter", (ev) => {
    blurAllItems();
    // Get the target of the entering event
    const node = ev.item as INode;
    // Get the related edges of the node
    const edges = node.getEdges();
    // Traverse the related edges, shift them to the front, and then shift the end nodes to the front
    edges.forEach((edge) => {
      unblurItem(edge);
      unblurItem(edge.getSource());
      unblurItem(edge.getTarget());
    });
    // Attention: the following code must be called to repaint the graph
    graph.paint();
  });
};
