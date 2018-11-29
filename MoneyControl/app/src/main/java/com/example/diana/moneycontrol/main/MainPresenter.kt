package com.example.diana.moneycontrol.main

import android.annotation.SuppressLint
import com.example.diana.moneycontrol.App.Companion.database
import com.example.diana.moneycontrol.model.record.Record
import com.google.firebase.auth.FirebaseAuth

class MainPresenter (private val view : MainView){

    fun logout() {
        val auth = FirebaseAuth.getInstance()
        auth.signOut()

        view.showMessage("Good Bye!")

        view.onLogoutSuccess()
    }

    fun onResume() {
        val auth = FirebaseAuth.getInstance()
        if (auth.currentUser == null) {
            view.onLogoutSuccess()
        } else {
            view.showMessage("Welcome!")
        }
    }

    @SuppressLint("CheckResult")
    fun getEmailAndName() {
        database.userDao().getUsers().subscribe {
            if (it.size > 0)
                view.setEmailAndName(it.last().email, it.last().name + " " + it.last().surname)
        }
    }

    @SuppressLint("CheckResult")
    fun getRecords() {
        database.recordDao().getRecords().subscribe {
            view.setRecords (it as ArrayList<Record>)
        }
    }

}