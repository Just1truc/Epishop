package controller

import (
	"backend/server"
	"database/sql"
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

var db *sql.DB

var err error

type Objects struct {
	Id          int    `json:"Id"`
	Names       string `json:"Name"`
	Price       int    `json:"Price"`
	Description string `json:"Description"`
	UserID      int    `json:"UserID"`
}

type Users struct {
	Id        int    `json:"Id"`
	Username  string `json:"Username"`
	Passwords string `json:"Password"`
}

func GetObjects(c *gin.Context) {
	result, err := server.New_server.DB.Query("SELECT * FROM Objects")
	if err != nil {
		panic(err)
	}
	var objs []Objects
	var obj Objects
	for result.Next() {
		err = result.Scan(&obj.Id, &obj.Names, &obj.Price, &obj.Description, &obj.UserID)
		if err != nil {
			panic(err)
		}
		objs = append(objs, obj)
	}
	c.JSON(200, objs)
}

func Cookie(c *gin.Context) {
	value, err := c.Cookie("connected")
	if err != nil {
		c.String(http.StatusNotFound, "Not Connected")
	} else {
		c.String(http.StatusFound, value)
	}
}

func CheckUsername(username string, c *gin.Context) int {
	Db_users, err := server.New_server.DB.Query("SELECT Username FROM Users")
	if err != nil {
		panic(err)
	}
	var check Users
	for Db_users.Next() {
		err = Db_users.Scan(&check.Username)
		if err != nil {
			panic(err)
		}
		if strings.Compare(check.Username, username) == 0 {
			c.Status(http.StatusBadRequest)
			return 1
		}
	}
	return 0
}

func SinUp(c *gin.Context) {
	var input Users
	err := c.BindJSON(&input)
	if err != nil {
		panic(err)
	}
	if CheckUsername(input.Username, c) == 0 {
		var id Users
		_, err = server.New_server.DB.Query(`INSERT INTO Users (id, Username, Passwords) VALUES ((SELECT MAX(id) + 1 FROM Users), $1, $2)`, input.Username, input.Passwords)
		value, _ := server.New_server.DB.Query("SELECT MAX(id) FROM Users")
		for value.Next() {
			err = value.Scan(&id.Id)
		}
		if err != nil {
			panic(err)
		} else {
			c.SetCookie("connected", strconv.Itoa(id.Id), 3600, "/", "localhost", false, true)
			c.Status(http.StatusCreated)
		}
	}
}

func SinIn(c *gin.Context) {
	var input Users
	err := c.BindJSON(&input)
	if err != nil {
		panic(err)
	}
	var test Users
	var statu int
	statu = 0
	value, err := server.New_server.DB.Query("SELECT Username, Passwords FROM Users")
	if err != nil {
		panic(err)
	}
	for value.Next() {
		err = value.Scan(&test.Username, &test.Passwords)
		if err != nil {
			panic(err)
		}
		if input.Username == test.Username && input.Passwords == test.Passwords {
			statu = http.StatusFound
		}
	}
	if statu == 0 {
		c.Status(http.StatusBadRequest)
	} else {
		var id Users
		value, _ := server.New_server.DB.Query(`SELECT id FROM Users WHERE Username=$1`, input.Username)
		for value.Next() {
			err = value.Scan(&id.Id)
			if err != nil {
				panic(err)
			}
		}
		c.SetCookie("connected", strconv.Itoa(id.Id), 3600, "/", "localhost", false, true)
		c.Status(statu)
	}
}

func AddObj(c *gin.Context) {
	var obj Objects
	err := c.BindJSON(&obj)
	if err != nil {
		panic(err)
	}
	value, _ := c.Cookie("connected")
	id, _ := strconv.ParseInt(value, 10, 64)
	_, err = server.New_server.DB.Query(`INSERT INTO Objects (id, Names, Descriptions, Price, UserID) VALUES ((SELECT MAX(id) + 1 FROM Objects), $1, $2, $3, $4)`, obj.Names, obj.Description, obj.Price, id)
	if err != nil {
		panic(err)
	} else {
		c.Status(http.StatusCreated)
	}
}

func Profile(c *gin.Context) {
	value, _ := c.Cookie("connected")
	id, _ := strconv.ParseInt(value, 10, 64)
	var output Users
	result, _ := server.New_server.DB.Query(`SELECT * FROM Users WHERE id=$1`, id)
	for result.Next() {
		err = result.Scan(&output.Id, &output.Username, &output.Passwords)
		if err != nil {
			panic(err)
		}
	}
	c.JSON(200, output)
}
