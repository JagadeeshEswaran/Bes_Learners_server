const API_KEY = "BESANT_STUDENT_TEST_SERVER_ACCESS_TOKEN_JULY2024";
const apiKeyMiddleware = (req, res, next) => {
	const apiKey = req.headers["x-api-key"];

	if (!apiKey) {
		return res
			.status(401)
			.json({ success: false, message: "API key is missing" });
	}

	if (apiKey !== API_KEY) {
		return res.status(403).json({ success: false, message: "Invalid API key" });
	}

	next();
};

module.exports = apiKeyMiddleware;
