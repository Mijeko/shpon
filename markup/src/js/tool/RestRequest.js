class RestRequest {
    static all(url) {
        return fetch(url).then(response => response.json());
    }

    static one(url, id, after_url = "") {
        return fetch(`${url}${id}/${after_url}`).then(response => response.json());
    }

    static post(url, options) {
        return fetch(url, {
            method: 'POST',
            ...options
        }).then(response => {
            return response.json();
        });
    }

    static update(url, id, options, after_url) {
        let _url = `${url}${id}/`;

        if (after_url) {
            _url += after_url;
        }

        return fetch(_url, {
            method: 'POST',
            ...options
        }).then(response => response.json());
    }

    static delete(url, id) {
        return fetch(`${url}${id}/`, {
            method: 'DELETE',
        }).then(response => response.json());
    }
}

export default RestRequest;