export const slideUp = {
    initial: {
        y: "100%"
    },
    open: (i?: any) => ({
        y:"0%",
        transition: { duration: 0.6, delay: i * 0.02 }
    }),
    closed: {
        y: "100%"
    }
}