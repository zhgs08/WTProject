package com.example.diana.moneycontrol.main

import android.content.Context
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.example.diana.moneycontrol.R
import com.example.diana.moneycontrol.model.record.Record
import kotlinx.android.synthetic.main.item_record.view.*

class RecordAdapter(private val context : Context,
                    private val items : ArrayList<Record>)
    : RecyclerView.Adapter<RecyclerView.ViewHolder>() {

    override fun onCreateViewHolder(p0: ViewGroup, p1: Int): RecyclerView.ViewHolder {
        return RecordViewHolder(LayoutInflater.from(context)
            .inflate(R.layout.item_record, p0, false))
    }

    override fun getItemCount(): Int {
        return items.size
    }

    override fun onBindViewHolder(p0: RecyclerView.ViewHolder, p1: Int) {
        val record = items[p1]
        p0.itemView.tvAmount.text = record.amount.toString()
        p0.itemView.tvCategory.text = record.category
        p0.itemView.tvDate.text = record.date
    }

    class RecordViewHolder (itemView : View) : RecyclerView.ViewHolder(itemView)
}