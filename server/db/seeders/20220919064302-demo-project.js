"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Projects", [
      {
        projectName: "Project 1",
        projectUrl: "https://www.facebook.com",
        pictureUrl: "https://www.facebook.com/images/fb_icon_325x325.png",
        status: "Done",
        endDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        projectName: "Project 2",
        projectUrl: "https://www.google.com",
        pictureUrl:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        status: "Done",
        endDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        projectName: "Project 3",
        projectUrl: "https://www.youtube.com",
        pictureUrl:
          "https://www.youtube.com/s/desktop/1b9c3b1c/img/favicon_32.png",
        status: "Done",
        endDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Projects", null, {})
  },
}
