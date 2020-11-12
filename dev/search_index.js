var documenterSearchIndex = {"docs":
[{"location":"#","page":"Home","title":"Home","text":"CurrentModule = MutableArithmetics\nDocTestSetup = quote\n    using MutableArithmetics\nend","category":"page"},{"location":"#MutableArithmetics.jl-1","page":"Home","title":"MutableArithmetics.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [MutableArithmetics]","category":"page"},{"location":"#MutableArithmetics.@rewrite-Tuple{Any}","page":"Home","title":"MutableArithmetics.@rewrite","text":"@macro(expr)\n\nReturn the value of expr exploiting the mutability of the temporary expressions created for the computation of the result.\n\nExamples\n\nThe expression\n\nMA.@rewrite(x + y * z + u * v * w)\n\nis rewritten into\n\nMA.add_mul!(MA.add_mul!(MA.copy_if_mutable(x),\n                        y, z),\n            u, v, w)\n\n\n\n\n\n","category":"macro"},{"location":"#MutableArithmetics.IsMutable","page":"Home","title":"MutableArithmetics.IsMutable","text":"struct IsMutable <: MutableTrait end\n\nWhen this is returned by mutability, it means that object of the given type can always be mutated to equal the result of the operation.\n\n\n\n\n\n","category":"type"},{"location":"#MutableArithmetics.MutableTrait","page":"Home","title":"MutableArithmetics.MutableTrait","text":"abstract type MutableTrait end\n\nAbstract type for IsMutable and NotMutable that are returned by mutability.\n\n\n\n\n\n","category":"type"},{"location":"#MutableArithmetics.NotMutable","page":"Home","title":"MutableArithmetics.NotMutable","text":"struct NotMutable <: MutableTrait end\n\nWhen this is returned by mutability, it means that object of the given type cannot be mutated to equal the result of the operation.\n\n\n\n\n\n","category":"type"},{"location":"#MutableArithmetics._rewrite","page":"Home","title":"MutableArithmetics._rewrite","text":"_rewrite(\n    vectorized::Bool,\n    minus::Bool,\n    inner_factor,\n    current_sum::Union{Symbol, Nothing},\n    left_factors::Vector,\n    right_factors::Vector,\n    new_var::Symbol = gensym(),\n)\n\nReturn new_var, code such that code is equivalent to\n\nnew_var = prod(left_factors) * inner_factor * prod(reverse(right_factors))\n\nIf current_sum is nothing, and is\n\nnew_var = current_sum op prod(left_factors) * inner_factor * prod(reverse(right_factors))\n\notherwise where op is + if !vectorized & !minus, .+ if vectorized & !minus, - if !vectorized & minus and .- if vectorized & minus.\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.add!-Union{Tuple{Vararg{Any,N}}, Tuple{N}} where N","page":"Home","title":"MutableArithmetics.add!","text":"add!(a, b, ...)\n\nReturn the sum of a, b, ..., possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.add_mul","page":"Home","title":"MutableArithmetics.add_mul","text":"add_mul(a, args...)\n\nReturn a + *(args...). Note that add_mul(a, b, c) = muladd(b, c, a).\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.add_mul!-Union{Tuple{Vararg{Any,N}}, Tuple{N}} where N","page":"Home","title":"MutableArithmetics.add_mul!","text":"add_mul!(args...)\n\nReturn add_mul(args...), possibly modifying args[1].\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.add_mul_buf!-Union{Tuple{N}, Tuple{Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.add_mul_buf!","text":"add_mul_buf!(buffer, args...)\n\nReturn add_mul(args...), possibly modifying args[1] and buffer.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.add_mul_buf_to!-Union{Tuple{N}, Tuple{Any,Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.add_mul_buf_to!","text":"add_mul_buf_to!(buffer, output, args...)\n\nReturn add_mul(args...), possibly modifying output and buffer.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.add_mul_to!-Union{Tuple{N}, Tuple{Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.add_mul_to!","text":"add_mul_to!(output, args...)\n\nReturn add_mul(args...), possibly modifying output.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.add_to!-Union{Tuple{N}, Tuple{Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.add_to!","text":"add_to!(a, b, c)\n\nReturn the sum of b and c, possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.broadcast!-Union{Tuple{N}, Tuple{Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.broadcast!","text":"broadcast!(op::Function, args...)\n\nReturns the value of broadcast(op, args...), possibly modifying args[1].\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.broadcast_mutability-Union{Tuple{N}, Tuple{Type,Any,Vararg{Type,N}}} where N","page":"Home","title":"MutableArithmetics.broadcast_mutability","text":"broadcast_mutability(T::Type, ::typeof(op), args::Type...)::MutableTrait\n\nReturn IsMutable to indicate an object of type T can be modified to be equal to broadcast(op, args...).\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.buffered_operate!-Union{Tuple{N}, Tuple{Any,Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.buffered_operate!","text":"buffered_operate!(buffer, op::Function, args...)\n\nReturns the value of op(args...), possibly modifying buffer.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.buffered_operate_to!-Union{Tuple{N}, Tuple{Any,Any,Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.buffered_operate_to!","text":"buffered_operate_to!(buffer, output, op::Function, args...)\n\nReturns the value of op(args...), possibly modifying buffer and output.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.copy_if_mutable-Tuple{Any}","page":"Home","title":"MutableArithmetics.copy_if_mutable","text":"copy_if_mutable(x)\n\nReturn a copy of x that can be mutated with MultableArithmetics's API without altering x. If mutability(x) is NotMutable then x is returned as none of x can be mutated. Otherwise, it redirects to mutable_copy. Mutable types should not implement a method for this function but should implement a method for mutable_copy instead.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.isequal_canonical-Tuple{Any,Any}","page":"Home","title":"MutableArithmetics.isequal_canonical","text":"isequal_canonical(a, b)\n\nReturn whether a and b represent a same object, even if their representations differ.\n\nExamples\n\nThe terms in two MathOptInterface affine functions may not match but once the duplicates are merged, the zero terms are removed and the terms are sorted in ascending order of variable indices (i.e. their canonical representation), the equality of the representation is equivalent to the equality of the objects begin represented.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.iszero!-Tuple{Any}","page":"Home","title":"MutableArithmetics.iszero!","text":"iszero!(x)\n\nReturn a Bool indicating whether x is zero, possibly modifying x.\n\nExamples\n\nIn MathOptInterface, a ScalarAffineFunction may contain duplicate terms. In Base.iszero, duplicate terms need to be merged but the function is left with duplicates as it cannot be modified. If iszero! is called instead, the function will be canonicalized in addition for checking whether it is zero.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mul!-Union{Tuple{Vararg{Any,N}}, Tuple{N}} where N","page":"Home","title":"MutableArithmetics.mul!","text":"mul!(a, b, ...)\n\nReturn the product of a, b, ..., possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mul-Union{Tuple{Vararg{Any,N}}, Tuple{N}} where N","page":"Home","title":"MutableArithmetics.mul","text":"mul(a, b, ...)\n\nShortcut for operate(*, a, b, ...), see operate.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mul_to!-Union{Tuple{N}, Tuple{Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.mul_to!","text":"mul_to!(a, b, c)\n\nReturn the product of b and c, possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mutability-Union{Tuple{N}, Tuple{Type,Any,Vararg{Type,N}}} where N","page":"Home","title":"MutableArithmetics.mutability","text":"mutability(T::Type, ::typeof(op), args::Type...)::MutableTrait\n\nReturn either IsMutable to indicate an object of type T can be modified to be equal to op(args...) or NotMutable otherwise.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mutable_broadcast!","page":"Home","title":"MutableArithmetics.mutable_broadcast!","text":"mutable_broadcast!(op::Function, args...)\n\nModify the value of args[1] to be equal to the value of broadcast(op, args...). Can only be called if mutability(args[1], op, args...) returns true.\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.mutable_buffered_operate!","page":"Home","title":"MutableArithmetics.mutable_buffered_operate!","text":"mutable_buffered_operate!(buffer, op::Function, args...)\n\nModify the value of args[1] to be equal to the value of op(args...), possibly modifying buffer. Can only be called if mutability(args[1], op, args...) returns true.\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.mutable_buffered_operate_to!-Union{Tuple{N}, Tuple{Nothing,Any,Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.mutable_buffered_operate_to!","text":"mutable_buffered_operate_to!(buffer, output, op::Function, args...)\n\nModify the value of output to be equal to the value of op(args...), possibly modifying buffer. Can only be called if mutability(output, op, args...) returns true.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mutable_copy","page":"Home","title":"MutableArithmetics.mutable_copy","text":"mutable_copy(x)\n\nReturn a copy of x that can be mutated with MultableArithmetics's API without altering x.\n\nExamples\n\nThe copy of a JuMP affine expression does not copy the underlying model as it cannot be modified though the MultableArithmetics's API, however, it calls copy_if_mutable on the coefficients and on the constant as they could be mutated.\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.mutable_operate!-Union{Tuple{N}, Tuple{Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.mutable_operate!","text":"mutable_operate!(op::Function, args...)\n\nModify the value of args[1] to be equal to the value of op(args...). Can only be called if mutability(args[1], op, args...) returns true.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.mutable_operate_to!-Union{Tuple{N}, Tuple{Any,Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.mutable_operate_to!","text":"mutable_operate_to!(output, op::Function, args...)\n\nModify the value of output to be equal to the value of op(args...). Can only be called if mutability(output, op, args...) returns true.\n\nIf output === args[i] for some i,\n\nThe user should expect to get an error. operate! or mutable_operate! should be used instead.\nAny method not supporting this case should throw an error.\n\nFor instance, in DynamicPolynomials, mutable_operate_to!(p, +, p, q) throws an error because otherwise, the algorithm would fill p while iterating over the terms of p and q hence it will never terminate. On the other hand mutable_operate!(+, p, q) uses a different algorithm that efficiently inserts the terms of q in the sorted list of terms of p with minimal displacement.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.one!-Tuple{Any}","page":"Home","title":"MutableArithmetics.one!","text":"one!(a)\n\nReturn one(a), possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.operate","page":"Home","title":"MutableArithmetics.operate","text":"operate(op::Function, args...)\n\nReturn an object equal to the result of op(args...) that can be mutated through the MultableArithmetics API without affecting the arguments.\n\nBy default:\n\noperate(+, x) and operate(+, x) redirect to copy_if_mutable(x) so a mutable type T can return the same instance from unary operators +(x::T) = x and *(x::T) = x.\noperate(+, args...) (resp. operate(-, args...) and operate(*, args...)) redirect to +(args...) (resp. -(args...) and *(args...)) if length(args) is at least 2 (or the operation is -).\n\nNote that when op is a Base function whose implementation can be improved for mutable arguments, operate(op, args...) may have an implementation in this package relying on the MutableArithmetics API instead of redirecting to op(args...). This is the case for instance:\n\nfor Base.sum,\nfor LinearAlgebra.dot and\nfor matrix-matrix product and matrix-vector product.\n\nTherefore, for mutable arguments, there may be a performance advantage to call operate(op, args...) instead of op(args...).\n\nExample\n\nIf for a mutable type T, the following is defined:\n\nfunction Base.:*(a::Bool, x::T)\n    return a ? x : zero(T)\nend\n\nthen operate(*, a, x) will return the instance x whose modification will affect the argument of operate. Therefore, the following method need to be implemented\n\nfunction MA.operate(::typeof(*), a::Bool, x::T)\n    return a ? MA.mutable_copy(x) : zero(T)\nend\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.operate!-Union{Tuple{N}, Tuple{Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.operate!","text":"operate!(op::Function, args...)\n\nReturns the value of op(args...), possibly modifying args[1].\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.operate_to!-Union{Tuple{N}, Tuple{Any,Function,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.operate_to!","text":"operate_to!(output, op::Function, args...)\n\nReturns the value of op(args...), possibly modifying output.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.promote_operation","page":"Home","title":"MutableArithmetics.promote_operation","text":"promote_operation(op::Function, ArgsTypes::Type...)\n\nReturns the type returned to the call operate(op, args...) where the types of the arguments args are ArgsTypes.\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.rewrite-Tuple{Any}","page":"Home","title":"MutableArithmetics.rewrite","text":"rewrite(x)\n\nRewrite the expression x as specified in @rewrite. Return a variable name as Symbol and the rewritten expression assigning the value of the expression x to the variable.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.rewrite_and_return-Tuple{Any}","page":"Home","title":"MutableArithmetics.rewrite_and_return","text":"rewrite_and_return(x)\n\nRewrite the expression x as specified in @rewrite. Return the rewritten expression returning the result.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.rewrite_generator-Tuple{Any,Any}","page":"Home","title":"MutableArithmetics.rewrite_generator","text":"rewrite_generator(expr::Expr, inner::Function)\n\nRewrites the generator statements expr and returns a properly nested for loop with nested filters as specified.\n\nExamples\n\njulia> using MutableArithmetics\n\njulia> MutableArithmetics.rewrite_generator(:(i for i in 1:2 if isodd(i)), i -> :($i + 1))\n:(for $(Expr(:escape, :(i = 1:2)))\n      if $(Expr(:escape, :(isodd(i))))\n          i + 1\n      end\n  end)\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.sub!-Tuple{Any,Any}","page":"Home","title":"MutableArithmetics.sub!","text":"sub!(a, b)\n\nReturn a - b, possibly modifying a.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.sub_mul","page":"Home","title":"MutableArithmetics.sub_mul","text":"sub_mul(a, args...)\n\nReturn a + *(args...). Note that sub_mul(a, b, c) = muladd(b, c, a).\n\n\n\n\n\n","category":"function"},{"location":"#MutableArithmetics.sub_mul!-Union{Tuple{Vararg{Any,N}}, Tuple{N}} where N","page":"Home","title":"MutableArithmetics.sub_mul!","text":"sub_mul!(args...)\n\nReturn sub_mul(args...), possibly modifying args[1].\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.sub_mul_buf!-Union{Tuple{N}, Tuple{Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.sub_mul_buf!","text":"sub_mul_buf!(buffer, args...)\n\nReturn sub_mul(args...), possibly modifying args[1] and buffer.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.sub_mul_buf_to!-Union{Tuple{N}, Tuple{Any,Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.sub_mul_buf_to!","text":"sub_mul_buf_to!(buffer, output, args...)\n\nReturn sub_mul(args...), possibly modifying output and buffer.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.sub_mul_to!-Union{Tuple{N}, Tuple{Any,Vararg{Any,N}}} where N","page":"Home","title":"MutableArithmetics.sub_mul_to!","text":"sub_mul_to!(output, args...)\n\nReturn sub_mul(args...), possibly modifying output.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.sub_to!-Tuple{Any,Any,Any}","page":"Home","title":"MutableArithmetics.sub_to!","text":"sub_to!(output, a, b)\n\nReturn the a - b, possibly modifying output.\n\n\n\n\n\n","category":"method"},{"location":"#MutableArithmetics.zero!-Tuple{Any}","page":"Home","title":"MutableArithmetics.zero!","text":"zero!(a)\n\nReturn zero(a), possibly modifying a.\n\n\n\n\n\n","category":"method"}]
}
