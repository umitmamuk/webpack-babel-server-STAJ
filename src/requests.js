export class Requset {
  constructor(url) {
    this.url = url;
  }

  // Tüm Verileri Alma İşlemi
  async get() {
    const response = await fetch(this.url);
    const responseData = await response.json();
    return responseData;
  }

  // Ekleme İşlemi
  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseData = await response.json();
    return responseData;
  }

  //Güncelleme İşlemi
  async put(id, data) {
    const response = await fetch(this.url + "/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseData = await response.json();
    return responseData;
  }

  // Silme İşlemi
  async delete(id) {
    const response = await fetch(this.url + "/" + id, {
      method: "DELETE",
    });
    return "Veri silme işlemi başarılı";
  }
}
