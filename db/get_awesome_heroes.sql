SELECT * FROM heroes WHERE powers LIKE concat('%', ${powers}, '%') AND age < ${age};
