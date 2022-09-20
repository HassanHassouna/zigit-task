"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Comments", [
      {
        text: "Comment 1",
        creationDate: new Date(),
        photoUrl: "https://www.facebook.com/images/fb_icon_325x325.png",
        project_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Comment 2",
        creationDate: new Date(),
        photoUrl:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        project_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: "Comment 3",
        creationDate: new Date(),
        photoUrl:
          "https://www.youtube.com/s/desktop/1b9c3b1c/img/favicon_32.png",
        project_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments", null, {})
  },
}
