export interface ImageBlockData {
  url: string;
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
  caption: string;
}

export interface VideoBlockData {
  url: string;
  withBorder: boolean;
  withBackground: boolean;
  stretched: boolean;
  caption: string;
}

export interface ListBlockData {
  type: "unordered" | "ordered";
  items: string[];
}

export interface TextBlockData {
    text: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    alignment: CanvasTextAlign;
}

export interface ChecklistBlockData {
  items: CheckboxBlockData[];
}

export interface CheckboxBlockData {
    id: string;
    text: string;
    checked: boolean;
}

export interface InputSelectBlockData {
  label: string;
  defaultValue: ""
  entries: {
    value: string;
    label: string;
  }[];
}

export interface CountryBlockData {
    country: string
    label: string
}

export interface ToggleOptionBlockData {
  title: string;
  items: {
    id: string;
    title: string;
  }[];
}

export interface InputBlockData {
  label: string;
  placeholder: string;
  required: boolean;
  isSecure: boolean;
  errorMessage: string;
  validation: string;
  regex: string;
  alignment: "left" | "center" | "right" | "justified";
  icon: ImageBlockData;
}

export interface ClickableOptionBlockData {
  title: string;
  icon: ImageBlockData;
}

export interface AddressBlockData {
    addressLine: string;
    postalCode: string;
    city: string;
    country: string;
}

export interface DateBlockData {
    date: string;
    required?: boolean
    startDate?: string, 
    endDate?: string
}

export interface PhoneBlockData {
    number: string;
}

export interface ButtonBlockData {
    title: string
}

export type BlockType =
  | "image"
  | "video"
//   | "list"
  | "paragraph"
  | "header"
  | "separator"
  | "checklist"
  | "input-select"
  | "yesno"
  | "input-text"
  | "country"
//   | "clickableOption"
//   | "button"
  | "address"
  | "date"
  | "phone";

export type EmptyBlockData = {}

export type BlockDataType = 
| ImageBlockData
| VideoBlockData
| ListBlockData
| ButtonBlockData
| TextBlockData
| ChecklistBlockData
| InputSelectBlockData
| ToggleOptionBlockData
| InputBlockData
| CountryBlockData
| ClickableOptionBlockData
| AddressBlockData
| DateBlockData
| PhoneBlockData
| EmptyBlockData;

export interface BlockData {
    id: string;
    type: BlockType;
    data: BlockDataType
}

export interface NodeScreen {
    id: string;
    type: string;
    data: {
      label: string;
      blocks?: BlockData[];
    };
  }

export interface Edge {
  id: string;
  source: string;
  target: string;
}

export interface DashboardData {
    nodes: NodeScreen[];
    edges: Edge[];
  } 