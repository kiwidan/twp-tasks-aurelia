enum GlobalAlertType {
    Error
}

export class GlobalAlert {
    public static types = GlobalAlertType;

    constructor(public type: GlobalAlertType, public message: string) { }
}