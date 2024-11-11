const express = require("express");
const { status: httpStatus } = require("http-status");
const userData = require("./data");
const app = express();

app.get("/api/v1/test", (req, res) => {
	res.status(httpStatus.OK).json({ success: true, message: "Hello World" });
});

app.get("/api/v1/users", (req, res) => {
	res.status(httpStatus.OK).json({ success: true, data: userData });
});

app.get("/api/v1/user/:id", (req, res) => {
	const userId = req.params.id;

	if (!userId) {
		return res
			.status(httpStatus.BAD_REQUEST)
			.json({ success: false, message: "User Id is required" });
	}

	const user = userData.find((user) => user.id === parseInt(userId, 10));

	if (!user) {
		return res
			.status(httpStatus.NOT_FOUND)
			.json({ success: false, message: "User not found" });
	}

	res.status(httpStatus.OK).json({ success: true, data: user });
});

app.get("/api/v1/user/", (req, res) => {
	const username = req.query.username;

	if (!username) {
		return res
			.status(httpStatus.BAD_REQUEST)
			.json({ success: false, message: "User Id is required" });
	}

	const user = userData.find((user) => user.username === username);

	if (!user) {
		return res
			.status(httpStatus.NOT_FOUND)
			.json({ success: false, message: "User not found" });
	}

	res.status(httpStatus.OK).json({ success: true, data: user });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
