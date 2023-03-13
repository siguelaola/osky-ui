import React from "react";
import { ChangeEvent } from "react";
declare class FileUploadMultiple extends React.Component<{}, {
    files: FileList | null;
}> {
    state: {
        files: any;
    };
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export { FileUploadMultiple };
