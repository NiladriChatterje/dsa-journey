CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    DECLARE NTH_SAL INT DEFAULT NULL;

    select salary into NTH_SAL from (
         SELECT SALARY, DENSE_RANK() OVER( order by salary desc) as dr
        from Employee group by salary
    ) AS t where dr = N; 


  RETURN (
    NTH_SAL
  );
END