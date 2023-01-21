# Write your MySQL query statement below
select w.id 
from weather join weather w 
    on datediff(w.recordDate, weather.recordDate) = 1
    and weather.Temperature < w.Temperature