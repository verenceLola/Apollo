export class StringFormmater {
    public static Pluralize = (quantity: number, singularString: string) =>
        quantity >= 1
            ? `${quantity} ${singularString}s`
            : `1 ${singularString}`;
}
