export function FormartValue(value: number) {
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2
    })
}