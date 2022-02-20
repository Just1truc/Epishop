package main

import (
	"backend/routes/router"
	"backend/server"
)

func main() {
	router.Router(server.New_server)
	server.New_server.Engine.Run()
}
