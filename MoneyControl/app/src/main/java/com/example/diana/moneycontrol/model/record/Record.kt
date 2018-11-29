package com.example.diana.moneycontrol.model.record

import android.arch.persistence.room.Entity
import android.arch.persistence.room.PrimaryKey


@Entity(tableName = "records")
data class Record(

    @PrimaryKey(autoGenerate = true)
    val id : Int,

    val date : String,
    val amount : Double,
    val category : String
)