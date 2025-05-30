export class ConvertValues {
    toReal(value: number): string {
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        }).format(value)
    }
}