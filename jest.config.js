module.exports = {
    "roots": [
      "src"
    ],
    "testMatch": [
        "**/tests/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)" 
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    reporters: [
        "default",
        [ "jest-junit", { suiteName: "jest tests" } ]
    ]
  }