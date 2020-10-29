import React from "react";
// We want to always get from source
import { Button } from "../lib/uikit-button";

export default { title: "Button" };

export const primary = () => <Button>Primary</Button>;
export const secondary = () => <Button type="secondary">Secondary</Button>;
export const disabled = () => <Button type="disabled">Disabled</Button>;
export const warning = () => <Button type="warning">Warning</Button>;
