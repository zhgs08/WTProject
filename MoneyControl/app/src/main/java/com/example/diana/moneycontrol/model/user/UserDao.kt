package com.example.diana.moneycontrol.model.user

import android.arch.persistence.room.Dao
import android.arch.persistence.room.Insert
import android.arch.persistence.room.Query
import com.example.diana.moneycontrol.model.user.User
import io.reactivex.Flowable

@Dao
interface UserDao {

    @Query("Select * from users")
    fun getUsers () : Flowable<List<User>>

    @Insert
    fun insertUser (user : User)


    @Query("Delete from users")
    fun nukeTable ()
}