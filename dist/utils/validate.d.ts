export declare type Arguments = {
    [name: string]: any;
};
export declare class Validate {
    private required;
    private entry?;
    static readonly required: Validate;
    static readonly optional: Validate;
    constructor(required: boolean);
    argument(args: Arguments): void;
    booleanProperty(object: any, path: string): void;
    string(args: Arguments): void;
    nonEmptyString(args: Arguments): void;
    stringProperty(object: any, path: string): void;
    numberProperty(object: any, path: string): void;
    functionProperty(object: any, path: string): void;
    object(args: Arguments): void;
    nonEmptyArray(args: Arguments): void;
    arrayProperty(object: any, path: string): void;
    regexProperty(object: any, path: string): void;
    private each;
    private property;
    private typeError;
    private error;
}
