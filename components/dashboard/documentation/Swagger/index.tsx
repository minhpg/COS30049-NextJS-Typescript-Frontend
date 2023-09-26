"use client";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./swagger-ui-fix.css";
import { Card } from "@tremor/react";

const Swagger = () => {
  return (
    <Card className="mt-6">
      <SwaggerUI url="http://localhost:8000/docs-json" />
    </Card>
  );
};

export default Swagger;
