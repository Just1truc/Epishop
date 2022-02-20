package server

import (
	"database/sql"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type Server struct {
	Engine *gin.Engine
	DB     *sql.DB
}

func CreateServer() Server {
	server := Server{}
	server.Engine = gin.Default()
	server.DB, _ = sql.Open("postgres", "host=localhost user=root dbname=my_database password=password sslmode=disable")
	return server
}

var New_server Server = CreateServer()
