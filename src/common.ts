
export interface MyPluginSettings {
	extensions: string[];
	folding: boolean;
	lineNumbers: boolean;
	minimap: boolean;
	semanticValidation: boolean;
	syntaxValidation: boolean;
	themeColor: string;
	fontSize: number;
}

export const DEFAULT_SETTINGS: MyPluginSettings = {
	extensions: ["ts", "js", "html", "py", "css","c", "cpp", "go","rs","java","json" ,"txt", "lua", "md", "php", "rb", "sh", "swift", "xml", "yaml"],
	folding: true,
	lineNumbers: true,
	minimap: true,
	semanticValidation: true,
	syntaxValidation: true,
	themeColor: "AUTO",
	fontSize: 16,
}


export const viewType = "code-editor";
