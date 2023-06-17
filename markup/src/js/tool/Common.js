export default class Common {
    static htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    static redirect(path) {
        window.location = path;
        // window.location.path = path;
    }
}