navigator.mediaDevices.getUserMedia({audio: true})
    .then(() => {
        console.log("Promise fullfiled");
    })
    .catch((err) => {
        console.log("Promise rejected: ", err);
    });
