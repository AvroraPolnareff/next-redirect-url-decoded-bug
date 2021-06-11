module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "query",
            key: "uid"
          }
        ],
        destination: "/:uid",
        permanent: true,
      }
    ]
  }
}
