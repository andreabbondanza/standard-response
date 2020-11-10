import { StandardError } from "./StandardError";

export class StandardResponse<T>
{
    public constructor(data: any)
    {
        this.data = {} as T;
        (Object as any).assign(this, data);
    }
    public errorMessage: string = "";
    public data: T | null = null;
    public error: StandardError = new StandardError();
}

