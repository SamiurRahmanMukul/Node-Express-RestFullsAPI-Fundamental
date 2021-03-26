var mySql = require("mysql");

var DatabaseConnectionConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "node_database",
};

var connecting = mySql.createConnection(DatabaseConnectionConfig);
connecting.connect(function (error) {
  if (error) {
    console.log("Connection Error.");
  } else {
    console.log("Connection Successful.");
    // InsertData(connecting); // Database Insert Data Function
    // DeleteDataById(connecting); // Database Delete Data Function
    // UpdateData(connecting); // Database Update Data Function
    SelectData(connecting); // Database Select Data Function
  }
});

function InsertData(connecting) {
  let data_insert_query =
    "INSERT INTO `students_list`(`name`, `roll`, `class`, `phone`, `city`) VALUES ('Samiur Rahman Mukul', 11115, 'Graduated', 01641861442, 'Mymensingh')";

  connecting.query(data_insert_query, function (error) {
    if (error) {
      console.log("Data Insert Fail.");
    } else {
      console.log("Data Inset Successful.");
    }
  });
}

function DeleteDataById(connecting) {
  let data_delete_by_id_query = "DELETE FROM `students_list` WHERE `id`='6'";

  connecting.query(data_delete_by_id_query, function (error) {
    if (error) {
      console.log("Data Delete Fail.");
    } else {
      console.log("Data Delete Successful.");
    }
  });
}

function UpdateData(connecting) {
  let data_update_by_name_query =
    "UPDATE `students_list` SET `name`='Sadman Khan Rajib' WHERE `id`='2'";

  connecting.query(data_update_by_name_query, function (error) {
    if (error) {
      console.log("Data Update Fail.");
    } else {
      console.log("Data Update Successful.");
    }
  });
}

function SelectData(connecting) {
  let select_all_data_query = "SELECT * FROM `students_list`";

  connecting.query(select_all_data_query, function (error, result) {
    if (error) {
      console.log("Data Select In Database Fail.");
    } else {
      console.log(result);
    }
  });
}
