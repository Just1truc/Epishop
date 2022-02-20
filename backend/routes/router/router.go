package router

import (
	"backend/routes/controller"
	"backend/server"
	"time"

	_ "github.com/gin-gonic/gin"
	cors "github.com/itsjamie/gin-cors"
)

func Router(p_server server.Server) {
	p_server.Engine.Use(cors.Middleware(cors.Config{
		Origins:         "*",
		Methods:         "GET, PUT, POST, DELETE",
		RequestHeaders:  "Origin, Authorization, Content-Type",
		ExposedHeaders:  "",
		MaxAge:          50 * time.Second,
		Credentials:     true,
		ValidateHeaders: false,
	}))
	p_server.Engine.GET("/", controller.GetObjects)
	p_server.Engine.POST("/add-obj", controller.AddObj)
	p_server.Engine.GET("/cookie", controller.Cookie)
	p_server.Engine.POST("/profile/signup", controller.SinUp)
	p_server.Engine.POST("/profile/signin", controller.SinIn)
	p_server.Engine.GET("/profile", controller.Profile)
}
