import { StandardError } from "./StandardError";

export class Jsonizable
{
    public toJson()
    {
        return JSON.stringify(this);
    }
}
/**
 * Standard response with data of type T
 */
export class StandardResponseWithData<T> extends Jsonizable
{
    public constructor(data: any)
    {
        super();
        this.data = {} as T;
        (Object as any).assign(this, data);
    }
    public errorMessage: string = "";
    public data: T | null = null;
    public error: StandardError = new StandardError();
}
/**
 * Standard response with data of type any
 */
export class StandardResponse extends Jsonizable
{
    public errorMessage: string = "";
    public data: any | null = null;
    public error: StandardError = new StandardError();
}
