class BuildQuery {
    static formatFormData(form) {
        const formData = new FormData(form);
        const data = [...formData.entries()];
        const asString = data.map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`).join('&');
        return asString;
    }

    static formatObject(data) {
        const asString = Object.keys(data).map(x => `${encodeURIComponent(x)}=${encodeURIComponent(data[x])}`).join('&');
        return asString;
    }

    static formDataFromObject(data) {
        let formData = new FormData();

        Object.keys(data).map(key => {
            formData.append(key, data[key]);
        });

        return formData;
    }
}

export default BuildQuery;