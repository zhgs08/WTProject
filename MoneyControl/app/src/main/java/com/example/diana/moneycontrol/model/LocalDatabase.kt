package com.example.diana.moneycontrol.model

import android.arch.persistence.room.Database
import android.arch.persistence.room.RoomDatabase
import com.example.diana.moneycontrol.model.record.Record
import com.example.diana.moneycontrol.model.record.RecordDao
import com.example.diana.moneycontrol.model.user.User
import com.example.diana.moneycontrol.model.user.UserDao


@Database(entities = arrayOf(User::class, Record::class), version = 1, exportSchema = false)
abstract class LocalDatabase : RoomDatabase() {
    abstract fun userDao () : UserDao
    abstract fun recordDao() : RecordDao
}