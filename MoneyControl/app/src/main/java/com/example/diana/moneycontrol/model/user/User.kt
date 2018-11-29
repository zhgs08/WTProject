package com.example.diana.moneycontrol.model.user

import android.arch.persistence.room.Entity
import android.arch.persistence.room.PrimaryKey


@Entity(tableName = "users")
data class User(

    @PrimaryKey(autoGenerate = true)
    val id : Int,

    val uuid : String?,
    val email : String,
    val password : String,
    val name : String,
    val surname : String
)