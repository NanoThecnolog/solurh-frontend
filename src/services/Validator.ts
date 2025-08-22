class Validator {
    private emailRegex: RegExp
    private fakePatterns = [
        "teste",
        "test",
        "abc",
        "123",
        "fake"
    ];
    private blockedDomains = [
        "teste.com",
        "abc.com",
        "123.com",
        "mail.com",
        "email.com",
        "test.com",
        "t.tr",
        "example.com"
    ]
    private phoneRegex = /^(?:\d{10}|\d{11})$/
    constructor() {
        this.emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    }
    private cleanPhoneNumber(phone: string) {
        return phone.replace(/\D/g, "")
    }
    public email(email: string): boolean {
        if (!this.emailRegex.test(email)) return false
        const enviroment = process.env.NEXT_PUBLIC_ENVIRONMENT
        const [user, dom] = email.split('@')
        if (enviroment === 'production') {
            if (this.blockedDomains.includes(dom.toLowerCase())) return false
        }
        if (user.length < 3 || dom.length < 5) return false
        if (this.fakePatterns.some(p => user.toLowerCase().includes(p))) return false
        return true
    }
    public phone(phone: string): boolean {
        const cleaned = this.cleanPhoneNumber(phone)
        if (!this.phoneRegex.test(cleaned)) return false
        if (cleaned.length === 11 && cleaned[2] !== '9') return false
        return true
    }
}
export const validator = new Validator()