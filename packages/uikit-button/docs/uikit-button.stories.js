import React from "react";
import { Button } from "../lib/uikit-button";

export default { title: "Button" };
export const defaultButton = () => <Button>Default</Button>;
export const primary = () => <Button type="primary">Primary</Button>;
export const disabled = () => <Button type="disabled">Disabled</Button>;
export const warning = () => <Button type="warning">Warning</Button>;
