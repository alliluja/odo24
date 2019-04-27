package handlers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"sto/server/models"
	"strconv"
)

/**
	Напоминания
**/
func Documents(w http.ResponseWriter, r *http.Request) {
	profile, err := getSession(w, r)
	if err != nil {
		http.Error(w, http.StatusText(403), 403)
		return
	}

	switch r.Method {
	case "GET":
		list := models.Documents{
			User_id: profile.User_id,
		}

		items, err := list.Get()
		if err != nil {
			CheckStatusCode(w, err)
			return
		}

		data, err := json.Marshal(items)
		if err != nil {
			http.Error(w, http.StatusText(500), 500)
			return
		}

		w.Write(data)
	case "POST":
		var buf bytes.Buffer
		buf.ReadFrom(r.Body)

		rem := models.Doc{}

		err := json.Unmarshal(buf.Bytes(), &rem)
		if err != nil {
			http.Error(w, http.StatusText(500), 500)
			return
		}

		rem.UserID = profile.User_id

		err = rem.Create()
		if err != nil {
			CheckStatusCode(w, err)
			return
		}

		data, err := json.Marshal(rem)
		if err != nil {
			http.Error(w, http.StatusText(500), 500)
			return
		}

		w.WriteHeader(201)
		w.Write(data)
	case "PUT":
		var buf bytes.Buffer
		buf.ReadFrom(r.Body)

		rem := models.Doc{}

		err := json.Unmarshal(buf.Bytes(), &rem)
		if err != nil {
			http.Error(w, http.StatusText(500), 500)
			return
		}

		rem.UserID = profile.User_id

		err = rem.Update()
		if err != nil {
			CheckStatusCode(w, err)
			return
		}

		data, err := json.Marshal(rem)
		if err != nil {
			http.Error(w, http.StatusText(500), 500)
			return
		}

		w.WriteHeader(202)
		w.Write(data)
	case "DELETE":
		getID := r.URL.Query().Get("id")
		if getID == "" {
			http.Error(w, http.StatusText(400), 400)
			return
		}

		id, err := strconv.ParseUint(getID, 10, 64)
		if err != nil {
			http.Error(w, http.StatusText(500), 500)
			return
		}

		rem := models.Doc{
			ID:     id,
			UserID: profile.User_id,
		}

		err = rem.Delete()
		if err != nil {
			CheckStatusCode(w, err)
			return
		}

		w.WriteHeader(204)
	default:
		http.Error(w, http.StatusText(405), 405)
	}
}
