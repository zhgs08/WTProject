package com.example.diana.moneycontrol.model.record

import android.arch.persistence.room.Dao
import android.arch.persistence.room.Query
import io.reactivex.Flowable

@Dao
interface RecordDao {

    @Query("Select * from records")
    fun getRecords () : Flowable<List<Record>>

}