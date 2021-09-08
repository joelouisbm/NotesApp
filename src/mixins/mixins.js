export default {
    methods: {
        setFocus: (selector) => {
            const el = document.querySelector(selector)
            el.focus()
        },
        enableElement: selector => {
            const el = document.querySelector(selector)
            el.disabled = false
        },
        download: () => {
            let text = document.querySelector('#text-note').value
            text = text.replace(/\n/g, "\r\n")
            let blob = new Blob([text], { type: "text/plain" })
            let anchor = document.createElement('a')
            anchor.download = 'note.txt'
            anchor.href = window.URL.createObjectURL(blob)
            anchor.target = '_blank'
            anchor.style.display = 'none'
            document.body.appendChild(anchor)
            anchor.click()
            document.body.removeChild(anchor)
        }
    }
}
