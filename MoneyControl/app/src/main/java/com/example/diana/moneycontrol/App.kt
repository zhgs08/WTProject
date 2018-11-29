package com.example.diana.moneycontrol

import android.app.Application
import android.arch.persistence.room.Room
import com.example.diana.moneycontrol.model.LocalDatabase

class App : Application(){

    companion object {
        lateinit var database: LocalDatabase
    }


    override fun onCreate() {
        super.onCreate()


        database = Room.databaseBuilder(applicationContext, LocalDatabase::class.java, "appDB")
            .allowMainThreadQueries()
            .build()
    }
}