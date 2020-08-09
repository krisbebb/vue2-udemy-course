export const LengthAwareMixin = {
    computed: {
        lengthAware() {
            return `${this.text} (${this.text.length})`
        }
    } 
}