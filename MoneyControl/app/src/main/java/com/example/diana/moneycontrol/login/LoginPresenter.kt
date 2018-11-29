package com.example.diana.moneycontrol.login

import android.annotation.SuppressLint
import com.example.diana.moneycontrol.App.Companion.database
import com.google.firebase.auth.FirebaseAuth

class LoginPresenter(private val view : LoginView) {


    fun login(email: String, password: String) {
        val auth = FirebaseAuth.getInstance()
        auth.signInWithEmailAndPassword(email, password).addOnCompleteListener {
            if (it.isSuccessful) {
                view.onLoginSuccess ()
            } else {
                view.onLoginFailed(it.exception?.message)
            }
        }
    }

    @SuppressLint("CheckResult")
    fun getLastEmail() {
        database.userDao().getUsers().subscribe {
            if (it.size > 0)
                view.setLastEmail(it.last().email)
        }
    }


}